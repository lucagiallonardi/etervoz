import React from 'react'
import style from "./Home.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import OurServices from '../../components/OurServices/OurServices';
import OurVoices from '../../components/OutVoices/OurVoices';
import AudioBooks from '../../components/AudioBooks/AudioBooks';

const Home = () => {
  return (
    <div className={style.div}>
        <NavBar/>
        <Cover/>
        <About/>
        <OurServices/>
        <OurVoices/>
        <AudioBooks/>
    </div>
  )
}

export default Home