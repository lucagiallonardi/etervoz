import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.css';
import { IconArrowUp, IconWorld } from '@tabler/icons-react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import logo from '../../media/img/LOGO FONDO BLANCO.png';

const NavBar = () => {
    const [scroll, setScroll] = useState(0);
    const[scrollUp, setScrollUp] = useState(true);

    
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

<div className={`${exit === true ? 'transiition-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition2-exit' : ''} `}></div>
            <div className={`${exit === true ? 'transiition3-exit' : ''} `}></div>

       <div className={scrollUp ? styles.navBarContainer : styles.navBarContainerNone}>
        <ul className={styles.navBarList}>
            <li className={styles.navBarItem}><Link onClick={()=>handleClick("/about")}>About us</Link></li>
            <li className={styles.navBarItem}><Link onClick={()=>handleClick("/services")}>Services</Link></li>
            <li className={styles.navBarItem}><Link onClick={()=>handleClick("/jobs")}>Our Jobs</Link></li>
            <li className={styles.navBarItem}><Link onClick={()=>handleClick("/")} className={styles.logoAll}><img className={styles.logoImg} src={logo} alt='logo'/><span><i>Etervoz</i><br/>Una voz para cada emoción</span></Link></li>
            <li className={styles.navBarItem}><Link onClick={()=>handleClick("/blog")}>Blog</Link></li>
            <li className={styles.navBarItem}><a href='#contact'>Contact</a></li>
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
