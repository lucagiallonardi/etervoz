import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import NavBar from '../../components/NavBar/NavBar';
import style from './Jobs.module.css';
import VoicesSection from '../../sections/VoicesSection/VoicesSection';

const Voices = () => {
    const [exit, setExit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

    // aca determina la solapa que esta clickeada
    const [solapa, setSolapa] = useState(1);
    const cambiarSolapa = (value) =>{
      setSolapa(value);
    }

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
    <div className={style.jobsContainer}>
        <div className={`${location.pathname !== '/' ? 'page-transition' : ''}`}></div>
        <div className={`${location.pathname !== '/' ? 'page-transition2' : ''}`}></div>
        <div className={`${location.pathname !== '/' ? 'page-transition3' : ''}`}></div>
        <div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
        <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
        <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>
        <NavBar/>
        {/* CONTENEDOR DE LAS SOLAPAS ADMINISTRADOR */}
  <div className= {`list-group ${style.solapasContainer}`}>
  <button type="button" onClick={()=> cambiarSolapa(1)} className={solapa===1 ? `list-group-item list-group-item-action active ${style.solapaActiva}` : 'list-group-item list-group-item-action'} aria-current="true">Our Voices</button>
  <button type="button" onClick={()=> cambiarSolapa(2)} className={solapa===2 ? `list-group-item list-group-item-action active ${style.solapaActiva}` : 'list-group-item list-group-item-action'} >Audiobooks</button>
  <button type="button" onClick={()=> cambiarSolapa(3)} className={solapa===3 ? `list-group-item list-group-item-action active ${style.solapaActiva}` : 'list-group-item list-group-item-action'}>Podcast</button>
  <button type="button" onClick={()=> cambiarSolapa(4)} className={solapa===4 ? `list-group-item list-group-item-action active ${style.solapaActiva}` : 'list-group-item list-group-item-action'}>Audio Editing</button>
</div>

<div className={solapa === 1 ? `${style.solapa}` : `${style.invisible}`}>
<VoicesSection/>
</div>
<div className={solapa === 2 ? `${style.solapa}` : `${style.invisible}`}>
<VoicesSection/>
</div>
<div className={solapa === 3 ? `${style.solapa}` : `${style.invisible}`}>
<VoicesSection/>
</div>
<div className={solapa === 4 ? `${style.solapa}` : `${style.invisible}`}>
<VoicesSection/>
</div>
    

        
    

    </div>
  )
}

export default Voices