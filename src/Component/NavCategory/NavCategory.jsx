import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavCategory() {
  return (
    <div className='category'>
        <div className='category__content'>
            <h2>Explore / Nuestros Cortes</h2>
            <nav className='nav-category'>
                <Link to='/category/ternera'>
                    <button className='btn-category'>Ternera</button>
                </Link>
                <Link to='/category/ave'>
                    <button className='btn-category'>Ave</button>
                </Link>
                <Link to='/category/cerdo'>
                    <button className='btn-category'>Cerdo</button>
                </Link>
                <Link to='/category/achura'>
                    <button className='btn-category'>Achura</button>
                </Link>
            </nav>
        </div>
        
    </div>
  )
}

export default NavCategory;