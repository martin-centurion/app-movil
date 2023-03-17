import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <div className='header'>
        <div className='header__content container'>

            <div className='header__content-logo'>
                <Logo />
            </div>

            <div>

                <nav>
                    <button>Home</button>
                    <button>Tienda</button>
                    <button>Nosotros</button>
                    <button>Contacto</button>
                </nav>

            </div>

            <div className='header__content-cartwidget'>
                <CartWidget />
            </div>

        </div>
    </div>
  )
}

export default NavBar;