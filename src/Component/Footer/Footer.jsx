import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__content container'>
            <div className='footer__content-logo'>
                <Logo />
            </div>

            <div className='footer__content-navbar'>
                <Link to='/'>
                    <button className='btn-footer'>Home</button>
                </Link>
                <Link to='/tienda'>
                    <button className='btn-footer'>Tienda</button>
                </Link>
                <Link to='/'>
                    <button className='btn-footer'>Nosotros</button>
                </Link>
                <Link to='/'>
                    <button className='btn-footer'>Contacto</button>
                </Link>
            </div>

            <div className='footer__content-info'>
                <h4>Redes Sociales</h4>
                <div className='footer__content-info-redes'>
                    <Link to=''>
                        <button className='btn-footer'>< BsInstagram /></button>
                        <button className='btn-footer'>< BsFacebook /></button>
                        <button className='btn-footer'>< BsLinkedin /></button>
                    </Link>
                </div>
                
            </div>

        </div>
        <div className='footer__content-copyright'>
            <h6>Copyright © 2023 - Aplicación web desarrollada por 
                 <Link to='/'>
                 <button className='bot-desarrollador'>
                     martinalejandro.dev
                 </button>
                </Link></h6>
        </div>
    </div>
  )
}

export default Footer;