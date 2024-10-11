import React, { useState } from 'react'
import style from "./Home.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Cover from '../../components/Cover/Cover';
import About from '../../components/AboutComp/AboutComp';
import OurServices from '../../components/OurServices/OurServices';
import OurVoices from '../../components/OutVoices/OurVoices';
import AudioBooks from '../../components/AudioBooks/AudioBooks';
import Podcast from '../../components/Podcast/Podcast';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import { Link, useNavigate, useLocation } from 'react-router-dom';  

const Home = () => {

  const [exit, setExit] = useState(false);
  const navigate = useNavigate();

  const handleClick= (link)=>{
      setExit(true);
      setTimeout(() => {
          navigate(link);
        }, 800);
  }

  const location = useLocation();

  return (
    <div className={style.div}>
            <div className={`${location.pathname === '/' ? 'page-transition' : ''}`}></div>
            <div className={`${location.pathname === '/' ? 'page-transition2' : ''}`}></div>
            <div className={`${location.pathname === '/' ? 'page-transition3' : ''}`}></div>
            <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>
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