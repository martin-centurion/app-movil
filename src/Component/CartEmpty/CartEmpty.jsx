import React from 'react';
import './styles.css';
import { TbShoppingCartX } from 'react-icons/tb';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

function CartEmpty() {
  return (
    <div className='empty'>
        <div className='empty__content'>
                <div className='empty__content-icono'>
                    <p className='empty__content-info-icono'><TbShoppingCartX /></p>
                </div>
                <div className='empty__content-txt'>
                    <h1>Ups!</h1>
                    <p>Su carrito esta vacio. Puede ir a nuestra tienda y seleccionar nuestros productos.</p>
                    <Link to='/tienda'>
                        <Button>Ir a la tienda</Button>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default CartEmpty;