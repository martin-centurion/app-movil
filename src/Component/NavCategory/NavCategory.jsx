import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavCategory() {
  return (
    <div className='category'>
        <div className='category__content'>
            <h2>Categorías</h2>
            <nav className='nav-category'>
                <Link to='/category/ternera'>
                    <button className='btn-category'>Ternera</button>
                </Link>
                <Link to='/category/ave'>
                    <button className='btn-category'>ave</button>
                </Link>
                <Link to='/category/cerdo'>
                    <button className='btn-category'>cerdo</button>
                </Link>
                <Link to='/category/achura'>
                    <button className='btn-category'>achura</button>
                </Link>
            </nav>
        </div>
        
    </div>
  )
}

export default NavCategory;