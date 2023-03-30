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
                        <p className='parrafo'>Aceptamos todas las formas de pago.</p>
                </div>  
                <div className='info__content-ic'>
                        <p><TbSend /></p>
                        <h4>Formas de envíos</h4>
                        <p className='parrafo'>Envíos sin cargo Zona Norte Buenos Aires y Capital Federal.</p>
                </div>
                <div className='info__content-ic'>
                        <p><TbBrandWhatsapp /></p>
                        <h4>Atención 24/7</h4>
                        <p className='parrafo'>Respondemos su consulta 24/7 por WhatsApp.</p>
                </div>              
            </div>
    </div>
  )
}

export default Info;