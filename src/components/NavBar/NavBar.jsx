import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.css';
import { IconArrowUp, IconBrandWhatsapp,IconPhone, IconMail, IconWorld } from '@tabler/icons-react';
import logo from '../../media/img/Logo maquilladora profesional tipográfico y elegante blanco y negro (4).png';

const NavBar = () => {
    const [scroll, setScroll] = useState(0);
    const[scrollUp, setScrollUp] = useState(true);

    
    useEffect(()=>{
        const handleScroll = ()=>{
            const currentScroll = window.scrollY;
            const isScrollingUp = currentScroll < scroll;
            setScroll(currentScroll);

            if(isScrollingUp){
                setScrollUp(true);
            } else{
                setScrollUp(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <div>
       <div className={scrollUp ? styles.navBarContainer : styles.navBarContainerNone}>
        <div><a href='/' className={styles.logoAll}><img className={styles.logoImg} src={logo} alt='logo'/><span><i>Etervoz</i><br/>Una voz para cada emoción</span></a></div>
        <ul className={styles.navBarList}>
            <li className={styles.navBarItem}><a href='#quienes-somos'>Home</a></li>
            <li className={styles.navBarItem}><a href='#servicios'>Acerca de</a></li>
            <li className={styles.navBarItem}><a href='#galeria'>Servicios</a></li>
            <li className={styles.navBarItem}><a href='#clientes'>Nuestras voces</a></li>
            <li className={styles.navBarItem}><a href='#socios'>Edición de audio</a></li>
            <li className={styles.navBarItem}><a href='#contacto'>Contacto</a></li>
            <li className={styles.navBarItem}><a href='#contacto'><IconBrandWhatsapp/></a></li>
            <li className={styles.navBarItem}><a href='#contacto'><IconPhone/></a></li>
            <li className={styles.navBarItem}><a href='#contacto'><IconMail/></a></li>
            <li className={styles.navBarItem}><a href='#contacto'>ES-EN<IconWorld/></a></li>
            
        </ul>
       </div>

    <div className={scroll === 0 ? styles.arrowUpNone : styles.arrowUp}>
       <IconArrowUp className={styles.arrowUpIcon} onClick={scrollToTop}/>
    </div>
    </div>
    );
};

export default NavBar;
