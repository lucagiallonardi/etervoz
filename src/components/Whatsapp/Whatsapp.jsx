import React from 'react';
import './Whatsapp.css'
import { IconBrandWhatsapp } from '@tabler/icons-react';

const Whatsapp = () => {
    return (
        <div className='wsp'>
                <div className='wpHover'></div>
                <IconBrandWhatsapp className='whatsapp'/>
        </div>
    );
};

export default Whatsapp;