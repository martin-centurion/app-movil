import React from 'react';
import './styles.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__content container'>
            <div className='footer__content-logo'>
                <h1>Logo</h1>
            </div>

            <div className='footer__content-navbar'>
                <button>Home</button>
                <button>Tienda</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>

            <div className='footer__content-info'>
                <h4>Titulo</h4>
                <p>Parrafo referido a info del sitio web.</p>
            </div>

        </div>
        <div className='footer__content-copyright'>
            <h6>Copyright © 2023 - Sitio web desarrollado por martinalejandro.dev</h6>
        </div>
    </div>
  )
}

export default Footer;