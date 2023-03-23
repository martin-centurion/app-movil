import React from 'react';
import './styles.css';
import { TbCash, TbSend, TbBrandWhatsapp } from 'react-icons/tb';

function Info() {
  return (
    <div className='info'>
            <div className='info__content container'>
                <div className='info__content-ic'>
                        <p><TbCash /></p>
                        <h4>Medios de pago</h4>
                        <p className='parrafo'>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                </div>  
                <div className='info__content-ic'>
                        <p><TbSend /></p>
                        <h4>Formas de envíos</h4>
                        <p className='parrafo'>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                </div>
                <div className='info__content-ic'>
                        <p><TbBrandWhatsapp /></p>
                        <h4>Atención 24/7</h4>
                        <p className='parrafo'>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                </div>              
            </div>
    </div>
  )
}

export default Info;