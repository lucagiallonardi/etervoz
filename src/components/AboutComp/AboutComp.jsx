import React from 'react'
import style from "./AboutComp.module.css";
import imgAbout from "../../media/img/neumann_tlm_103-scaled.jpg";

const AboutComp = () => {
  return (
    <div className={style.aboutContainer} id='about'>
        <div><h1><u>Equipo</u></h1><p>Somos Belén Heredia y Ezequiel Álvarez, locutores, actores de voz y emprendedores con amplio conocimiento en diseño sonoro y post producción de audio. Realizamos audiolibros, doblaje, comerciales, cursos en línea, institucionales, centrales telefónicas y pre-atendedores.  Nos enfocamos en mantener siempre la excelencia y compromiso con las fechas de entrega de tu proyecto.</p></div>
        <img src={imgAbout}/>
    </div>
  )
}

export default AboutComp