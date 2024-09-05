import React from 'react'

import style from "./OurServices.module.css";
const OurServices = () => {
  return (
    <div className={style.servicesContainer} id='services'>
    <h1>Nuestros servicios</h1>
    <div className={style.divGrid}>
        <div><h1>Locución</h1><p>Realizamos servicios de locución integral entre los que se pueden ubicar audiolibros, comerciales, cursos en línea, institucionales, doblaje y un sin fin de proyectos en los que se requiera el uso de voz profesional.</p></div>
        <div><h1>Voice Over - Latinoamérica</h1><p>Utilizamos el español neutro dominando el tono y cadencia  requeridos por el cliente para llevar su proyecto a cualquier parte del mundo de habla hispana.</p></div>
        <div><h1>Producción y post producción de audio</h1><p>Contamos con un amplio conocimiento en diseño sonoro y edición de audio, lo que nos permite entregar el material ya ecualizado, procesado y en condiciones de ser lanzado. </p></div>
    </div>

    <iframe
    className={style.iframe}
     src="https://www.youtube.com/embed/4prbhZq2b_E/maxresdefault.jpg"
     title="Una voz para tu e-learning"
     ></iframe>
    
    </div>
  )
}

export default OurServices