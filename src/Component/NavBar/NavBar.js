import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { BsXLg } from 'react-icons/bs';
import { VscListSelection } from 'react-icons/vsc';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {

    const navRef = useRef();
    const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
    }  
  return (
    <div className='header'>
        <div className='header__content container'>

            <div className='header__content-logo'>
                <Link to="/">
                    <Logo />
                </Link>
            </div>

            <div className='header__content-menu'>

                    <nav ref={ navRef }>
                        <Link to="/">
                            <button onClick={ showNavBar }>Home</button>
                        </Link>
                        <Link to="/tienda">
                            <button onClick={ showNavBar }>Tienda</button>
                        </Link>
                        <Link to="/">
                            <button onClick={ showNavBar }>Nosotros</button>
                        </Link>
                        <Link to="/">
                            <button onClick={ showNavBar }>Contacto</button>
                        </Link>
                        <Link onClick={ showNavBar } to='/cart'>
                            <CartWidget />
                        </Link>

                        <button 
                            className='nav-btn nav-close-btn' 
                            onClick={ showNavBar }>
                            <BsXLg />
                        </button>
                    </nav>
                    
                    <div className='cart'>
                        <button 
                            className='nav-btn' 
                            onClick={ showNavBar }>
                            <VscListSelection />
                        </button>
                    </div>  
                </div>

        </div>
    </div>
  )
}

export default NavBar;