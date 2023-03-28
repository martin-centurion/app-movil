import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../Info/Info';
import './styles.css';

function Banner() {
  return (
    <div>

    <div className='banner'>
        <div className='banner__content container'>
            <div className='banner__content-title'>
                <h1>Solo Carne Premium</h1>
                <p>Ternera | Ave | Cerdo | Achuras</p>
                <Link to='/tienda'>
                    <button>Ir a la Tienda</button>
                </Link>
            </div>
            <div className='banner__content-img'>
                <img src="https://i.ibb.co/LzH0Qdy/tomahawk.png" alt="Tomahawk-Banner" />
            </div>
        </div>
        
    </div>
        <Info />
    </div>
  )
}

export default Banner;