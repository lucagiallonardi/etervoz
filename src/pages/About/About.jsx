import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import NavBar from '../../components/NavBar/NavBar';
import style from './About.module.css';
import img from '../../media/img/neumann_tlm_103-scaled.jpg';
import video from '../../media/video/EtervozREEl.mp4'
import img2 from '../../media/img/etervoz (3).png'

const About = () => {
    const [exit, setExit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  // Funciones para manejar el hover y el mouse fuera del elemento
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  // Funciones para manejar el hover y el mouse fuera del elemento
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };


  // Funciones para manejar el hover y el mouse fuera del elemento
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };


  // Funciones para manejar el hover y el mouse fuera del elemento
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };


  // Funciones para manejar el hover y el mouse fuera del elemento
  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };


  // Funciones para manejar el hover y el mouse fuera del elemento
  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };


  const handleClick= (link)=>{
      if(location.pathname !== link){
      setExit(true);
      setTimeout(() => {
          navigate(link);
        }, 800);
      }else{
          navigate(link);
      }
  }

  return (
    <div>
        <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
        <div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
        <div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
        <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
        <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
        <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>
        <NavBar/>
        <div className={style.aboutCover}>
          <h1>About us Lorem ipsum dolor sit amet. </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptas.</p>          
        </div>
        <div className={style.imagenesCover}>
            <img src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWljciVDMyVCM2Zvbm98ZW58MHx8MHx8fDA%3D'/>
            <img src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWljciVDMyVCM2Zvbm98ZW58MHx8MHx8fDA%3D'/>
            <img src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWljciVDMyVCM2Zvbm98ZW58MHx8MHx8fDA%3D'/>
          </div>
        <div className={style.tipsAbout}>
          <div className={style.tipLeft}>
          <div><h1 onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>Nuestros Inicios</h1><p className={isHovered1 ? `${style.tipVisible}` : `${style.tipInvisible}`}>Iniciamos nuestro camino en el año 2014 en COSAL formándonos en la carrera de Locución. Al recibirnos y querer entrar al mundo laboral nos dimos cuenta que era algo muy desafiante y por eso debíamos enfocarnos en destacar…</p></div>
          <div><h1 onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>Capacitación Continua</h1><p className={isHovered2 ? `${style.tipVisible}` : `${style.tipInvisible}`}> Realizamos múltiples capacitaciones para expandir nuestros límites, conocimientos, capacidades; siempre alimentando nuestra curiosidad y ganas de llegar para quedarnos. Porque todo este mundo, nuestra profesión, es parte de nosotros y es la vida que construimos día a día.</p></div>
          <div><h1 onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>Nuestra misión</h1><p className={isHovered3 ? `${style.tipVisible}` : `${style.tipInvisible}`}> Nuestra misión es siempre la misma: brindarte una grabación natural, real, sincronizada y envolvente, con el objetivo de que tu mensaje llegue claro, directo y permanente.</p></div></div>
          
          <div className={style.tipRight}>
          <div><h1 onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>Adaptación al Mercado</h1><p className={isHovered4 ? `${style.tipVisible}` : `${style.tipInvisible}`}> Entendimos que un punto clave y MUY IMPORTANTE era analizar el mercado: Qué se pide, qué se busca, qué formatos siguen vigentes, cuáles fueron mutando y cuánto teníamos que transformarnos y adaptarnos para llegar a ese objetivo. Entonces, ¿qué íbamos a hacer?...</p></div>
          <div><h1 onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>Diversidad en Proyectos</h1><p className={isHovered5 ? `${style.tipVisible}` : `${style.tipInvisible}`}> Con experiencia en la industria del doblaje, locución y producción de audio totalmente artesanal y único, hemos trabajado en diversos proyectos; desde audiolibros, hasta e-learning, publicidad y doblaje. Creemos que cada voz tiene una historia que contar, con una personalidad única e irrepetible. </p></div>
          <div><h1 onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>Relación con nuestros clientes</h1><p className={isHovered6 ? `${style.tipVisible}` : `${style.tipInvisible}`}>Nos gusta ser cercanos, cálidos, familiares y accesibles, para que cada cliente se sienta ciento por ciento parte del proceso creativo, tal cual lo soñó. Y por y para todo esto, la confianza y el diálogo son claves para lograr resultados excepcionales… como los que buscamos y deseamos.</p></div></div>

          <img src={img}/>
        </div>
        <div className={style.videoDiv}>
        <video
        autoPlay
        muted
        loop
        controls={false} // Si no quieres mostrar los controles
        className={style.aboutVideo} // Ajuste de tamaño opcional
      ><source src={video} type="video/mp4" /></video>
      <img src={img2}/>
        </div>
    </div>
  )
}

export default About