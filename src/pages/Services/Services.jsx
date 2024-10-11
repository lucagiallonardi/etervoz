import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import NavBar from '../../components/NavBar/NavBar';
import OurServices from '../../components/OurServices/OurServices';

const Services = () => {
    const [exit, setExit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
        <OurServices/>
    </div>
  )
}

export default Services