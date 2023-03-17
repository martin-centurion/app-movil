import React from 'react';
import './styles.css';
import { BsBag } from 'react-icons/bs';

function CartWidget() {
  return (
    <div className='cart'>
        <div className='cart__content'>
            <div className='cart__content-icono'>
                <BsBag />
            </div>
        </div>
    </div>
  )
}

export default CartWidget;